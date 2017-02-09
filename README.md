# SimpleToc

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

//= require simple_toc

```

This plugin require jQuery.

``` javascript
$(function() {
  # simple case
  $('.toc').simpleToc()
});
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/miraoto/simple_toc. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.


## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
