# angular-aiqrcode
Generate awesome qr code easily

## How to use aiqrcode

#### Basic

```html
<aiqrcode data="your_data"></aiqrcode>
```

#### Advance

```html
<aiqrcode
    render="canvas"
    data="https://www.aiqrcode.com"
    size="300"
    minversion="10"
    color="grey">
</aiqrcode>
```

### 2. Options
For more info: https://larsjung.de/jquery-qrcode/

- render
- eclevel
- minversion
- color
- background
* data
- size
- radius
- quiet
- mode
- msize
- mposx
- mposy
- label
- fontname
- fontcolor

- img(coming soon...)


## Developer get started

1. Install grunt module

In root foler, run

```bash
npm install
```

2. Run grunt
Whenever change happens in /src, create build automatically

```bash
grunt
```

or,

```bash
grunt build
```

to create a build only
