Foundation Prototype Template
=============================

### Foundation + Assets Pipeline + Assemble

A template for maintainable HTML prototypes with an easy learning curve and great for collaboration. We use this template at [Propeople](http://www.wearepropeople.com) for some of our HTML prototypes.

### Features:
* Based on Zurb Foundation 5.0
* Has an asset pipeline similar to the [Rails asset pipeline](http://guides.rubyonrails.org/asset_pipeline.html)
* Layouts and partials with [Assemble](http://assemble.io). Allows easy separation of heaers, navigation, sidebars and footers.

## How to use

Clone the repository and rename the folder to your prefered application name. Then ```cd``` into your application directory.
```
$ git clone https://github.com/codelittle/foundation-prototype.git
$ mv foundation-prototype app-name
$ cd app-name
```

#### Install Node.js packages:
```$ npm install```

#### Install Bower components:
```$ bower install```

#### Build the sample prototype:
```$ grunt build```

### Open the built prototype:
```$ open dist/index.html```

## Watching directory
You can ask ```grunt``` to continually watch for changes and rebuild the pages when you save them.

To do so you need to simply run the ```grunt```

### Watch for changes
```
$ cd app-name
$ grunt
```