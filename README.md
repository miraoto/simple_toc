# SimpleToc

[![Gem Version](https://badge.fury.io/rb/simple_toc.svg)](https://badge.fury.io/rb/simple_toc) [![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)

'simple-toc' makes a simple table of contents from DOM structure.

## Installation

```ruby
gem 'simple_toc'
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install simple_toc

## Usage

To require this plguin, add the following to your application.js:

``` javascript

//= require simpleToc

```

This plugin require jQuery.

``` javascript
$(function() {
  # simple case
  $('#toc').simpleToc();

  # advance case
  $('#toc').simpleToc({
      listType: '<ol/>',
      selectors: 'h1,h2,h3',
      prefix: 'toc',
  });
});
```

``` html
<div id="toc"></div>

<h2>hoge</h2>
<h2>fuga</h2>
<h3>fuga > fuga</h3>
<h2>piyo</h2>
```


## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/miraoto/simple_toc. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.


## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
