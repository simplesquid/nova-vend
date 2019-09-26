<template>
    <loading-view :loading="initialLoading">
        <heading class="mb-6">{{ __('Vend API Login') }}</heading>

        <loading-card :loading="loading" class="card">
            <card v-if="hasNoToken" class="flex flex-col items-center justify-center p-8" style="min-height: 300px">
                <h1 class="text-black text-4xl text-90 font-light mb-6">
                    {{ __('You need to log in to the Vend API') }}
                </h1>

                <p class="mb-6">
                    {{ __('Make sure you have set the redirect URI for your Vend application to') }}: <br>
                    <code>{{ status.oauth_redirect }}</code>
                </p>

                <p>
                    <a :href="status.oauth_request" class="btn btn-default btn-primary">{{ __('Login') }}</a>
                </p>
            </card>
            <card v-else-if="hasToken" class="flex flex-col items-center justify-center p-8" style="min-height: 300px">
                <h1 class="text-black text-4xl text-90 font-light mb-6">
                    {{ __('You are already logged in to the Vend API') }}
                </h1>

                <p class="mb-6">
                    {{ __('Your OAuth token details are') }}:
                </p>

                <table class="table mb-8">
                    <thead>
                    <tr>
                        <th class="text-left">{{ __('Key') }}</th>
                        <th class="text-left">{{ __('Value') }}</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><span class="font-bold">{{ __('Domain Prefix') }}</span></td>
                        <td>{{ status.token.domain_prefix }}</td>
                    </tr>
                    <tr>
                        <td><span class="font-bold">{{ __('Current Token') }}</span></td>
                        <td>{{ status.token.access_token }}</td>
                    </tr>
                    <tr>
                        <td><span class="font-bold">{{ __('Expires') }}</span></td>
                        <td>{{ expires }}</td>
                    </tr>
                    <tr>
                        <td><span class="font-bold">{{ __('Refresh Token') }}</span></td>
                        <td>{{ status.token.refresh_token }}</td>
                    </tr>
                    </tbody>
                </table>

                <p class="mb-6">
                    {{ __('You may revoke the token if you wish to login again') }}:
                </p>

                <p>
                    <a :href="status.oauth_reset" class="btn btn-default btn-primary">{{ __('Revoke') }}</a>
                </p>
            </card>
        </loading-card>
    </loading-view>
</template>

<script>
    export default {
        data() {
            return {
                initialLoading: true,
                loading: false,
                status: {}

            }
        },

        computed: {
            hasNoToken: function () {
                return !this.loading && !this.initialLoading && this.status.token === null;
            },
            hasToken: function () {
                return !this.loading && !this.initialLoading && this.status.token !== null;
            },
            expires: function () {
                return (!this.loading && !this.initialLoading && this.status.token !== null) ? moment(this.status.token.expires).calendar() : null;
            },
        },

        methods: {
            getStatus() {
                this.loading = true;
                this.initialLoading = false;
                Nova.request().get('/nova-vendor/vend-api/status')
                    .then((response) => {
                        this.status = response.data;
                        this.loading = false;
                    })
            }
        },

        created: function () {
            this.getStatus()
        },
    }
</script>
