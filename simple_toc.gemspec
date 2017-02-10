# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'simple_toc/version'

Gem::Specification.new do |spec|
  spec.name          = "simple_toc"
  spec.version       = SimpleToc::VERSION
  spec.authors       = ["miraoto"]
  spec.email         = ["miraoto@gmail.com"]

  spec.summary       = %q{'simple-toc' makes a simple table of contents from DOM structure.}
  spec.homepage      = "https://github.com/miraoto/simple_toc"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").reject { |f| f.match(%r{^(test|spec|features)/}) }
  spec.require_paths = ["lib"]

  spec.add_dependency 'railties'

  spec.add_development_dependency "bundler", "~> 1.13"
  spec.add_development_dependency "rake", "~> 10.0"
end
