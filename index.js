const urlToImage = require('url-to-image');
const args = require('minimist')(process.argv.slice(2), {
    alias: {
	"?": "help",
        s: 'scale',
        lp: 'logoPath',
        t: "template",
        c: "code",
        cnt: "count",
	w: "width",
	h: "height",
        l: "label"
    }
});

if(args.help)
{
    console.log("    -?   / --help      help");
    console.log("    -s   / --scale     image scale - optional (default 1)");
    console.log("    -lp  / --logoPath  url to logo - optional (will be empty if not specified)");
    console.log("    -t   / --template  template of QR-code - required (available: template1, template2, template3, template4, template5)");
    console.log("    -c   / --code      code that will be used for QR-code");
    console.log("    -l   / --label     label for qr (if available)");
    console.log("    -cnt / --count     count of generated qr-codes  - required");
    console.log("    -w   / --width     result image width (in px) - required");
    console.log("    -h   / --height    result image width (in px) - required");
    return;
}


const scale = args.scale ? args.scale : 1;
const logoPath = args.logoPath;
const template = args.template;
const code = args.code;
const label = args.label;
const count = args.count ? args.count : 1;
const width = args.width;
const height = args.height;

var url = "https://dev-api.hubex.ru/tool/QrRenderer/" + template + "?scale=" + scale;
if(logoPath) {
    url +=  "&LogoPath="+ logoPath;
}

if(code) {
    url += "&code=" + code;
}

if(label) {
    url += "&label=" + label;
}

for(var i = 0; i < count; i++) {


    var options = {
        verbose: false,
	width: width * scale,
	height: height * scale,
        // Give a short time to load additional resources
        requestTimeout: 2000
    }


    console.log(url)
    
    urlToImage(url, 'out/' + i + '.png', options)
        .catch(function(err) {
            console.error(err);
        });

}