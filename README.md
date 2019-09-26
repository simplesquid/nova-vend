# Vend (a Laravel Nova tool)
[![Latest Version](https://img.shields.io/github/release/simplesquid/nova-vend.svg?style=flat-square)](https://github.com/simplesquid/nova-vend/releases)
[![MIT Licensed](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE)
[![Total Downloads](https://img.shields.io/packagist/dt/simplesquid/nova-vend.svg?style=flat-square)](https://packagist.org/packages/simplesquid/nova-vend)

A Laravel Nova tool for our [PHP SDK](https://github.com/simplesquid/vend-sdk) and [Laravel package](https://github.com/simplesquid/laravel-vend-sdk) for Vend POS | https://docs.vendhq.com/

Contributions, issues and suggestions are very much welcome.

## Installation

To install the SDK in your project you need to require the package via composer:

```bash
composer require simplesquid/nova-vend
```

To register the Tool in Nova, simply add it to the list of tools returned by the `tools` method in your application's `NovaServiceProvider`. For example:

```php
use SimpleSquid\NovaVend\VendLogin;

/**
 * Get the cards that should be listed in the Nova sidebar.
 *
 * @return array
 */
public function tools()
{
    return [
        new VendLogin,
    ];
}
```

## OAuth Authorisation

This tool currently only supports OAuth 2.0 authorisation with the Vend API.
