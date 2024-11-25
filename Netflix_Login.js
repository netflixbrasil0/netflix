############################################## Copyright (2024) Netflix ###########################################################################
{
  "expressions": [{
    "expression": "nf.region,brazil-south-1,:eq,nf.cluster,testcluster,:eq,:and,name,cpuALL.stolen,:eq,:and,:sum,(,nf.node,),:by",
    "frequency": 60000,
    "id": "c80bebe3cd68fd1828f627d279584c7891162aa0"
  }, {
    "expression": "nf.app,testapp,:eq,error,400,:eq,:and,name,downstreamErrors,:eq,:and,:sum",
    "frequency": 60000,
    "id": "29b77f4d9c156a8db7db8d642f1ead63fc610887"
  }]
}
[{
	"streamId": "96a784fe-e335-4e76-b3d4-d7b401f65e16",
	"remoteAddress": "142.215.8.5",
	"remoteAddress": "142.215.8.6",
        "remoteAddress": "64.191.232.77",
	"receivedMessages": {
		"current": 50
	},
	"droppedMessages": {
		"current": 0
	}
}, {
	"streamId": "a5f83589-bf3f-4692-9e28-df47dfe8333c",
	"receivedMessages": {
		"current": 128
	},
	"droppedMessages": {
		"current": 0
	}
}

host ('http://videoserver.com/142.215.8.5')
print (segments)
print (target_duration)

public class CommandHelloWorld extends HystrixCommand<String> {

    private final String name;

    public CommandHelloWorld(String name) {
        super(HystrixCommandGroupKey.Factory.asKey("ExampleGroup"));
        this.name = name;
    }

    @Override
    protected String run() {
        return "Nuvem MFC" + name + "!";
    }
}



video.load('http://videoserver.com/ip-142.215.8.5')
print(.dump(url-tvg="https://api.prod.maissbt.com/epg)

import gzip
import ssl
import urllib.request
from urllib.parse import urljoin


class DefaultHTTPClient:
    def __init__(self, proxies=None):
        self.proxies = proxies

    def download(self, uri, timeout=None, headers={}, verify_ssl=True):
        proxy_handler = urllib.request.ProxyHandler(self.proxies)
        https_handler = HTTPSHandler(verify_ssl=verify_ssl)
        opener = urllib.request.build_opener(proxy_handler, https_handler)
        opener.addheaders = headers.items()
        resource = opener.open(uri, timeout=timeout)
        base_uri = urljoin(resource.geturl(), ".")

        if resource.info().get("Content-Encoding") == "gzip":
            content = gzip.decompress(resource.read()).decode(
                resource.headers.get_content_charset(failobj="utf-8")
            )
        else:
            content = resource.read().decode(
                resource.headers.get_content_charset(failobj="utf-8")
            )
        return content, base_uri


class HTTPSHandler:
    def __new__(self, verify_ssl=True):
        context = ssl.create_default_context()
        if not verify_ssl:
            context.check_hostname = False
            context.verify_mode = ssl.CERT_NONE
        return urllib.request.HTTPSHandler(context=context)
{
  "id": "",
  "message": {
    "type": "rate",
    "timestamp": 1596570660000,
    "step": 60000,
    "inputSize": {
      "total": 4,
      "details": {
        "app,www,:eq,name,request,:eq,:and,:sum,(,cluster,),:by": 4
      }
    },
    "intermediateSize": {
      "total": 2,
      "details": {
        "http://localhost:7101/api/v1/graph?q=name,ssCpuUser,:eq,:avg": 2
      }
    },
    "outputSize": {
      "total": 2,
      "details": {}
    }
  }
}
Config config = ConfigFactory.load();
Registry registry = new DefaultRegistry();
ActorSystem system = ActorSystem.create("eval", config);
Evaluator evaluator = new Evaluator(config, registry, system);





















































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































<!DOCTYPE html><html lang="en" translate="no" data-bs-theme="dark"><head>
  <meta charset="UTF-8">
  <meta name="description" content="">
  <link rel="icon" href="/favicon.png">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700">
  <link rel="stylesheet" href="/splash-screen.css">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
  <title>Login | Sigma</title>
  <meta name="theme-color" content="#0F1014">
  <meta name="google" content="notranslate">
  <link rel="icon" href="/favicon.ico" sizes="any">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
  <link rel="stylesheet" type="text/css" href="/api/theme.css">
  <link rel="manifest" href="/api/manifest.webmanifest">

  <style>
      .lds-ripple,
      .lds-ripple div {
          box-sizing: border-box;
      }
      .lds-ripple {
          display: inline-block;
          position: relative;
          width: 80px;
          height: 80px;
      }
      .lds-ripple div {
          position: absolute;
          border: 4px solid currentColor;
          opacity: 1;
          border-radius: 50%;
          animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
      }
      .lds-ripple div:nth-child(2) {
          animation-delay: -0.5s;
      }
      @keyframes lds-ripple {
          0% {
              top: 36px;
              left: 36px;
              width: 8px;
              height: 8px;
              opacity: 0;
          }
          4.9% {
              top: 36px;
              left: 36px;
              width: 8px;
              height: 8px;
              opacity: 0;
          }
          5% {
              top: 36px;
              left: 36px;
              width: 8px;
              height: 8px;
              opacity: 1;
          }
          100% {
              top: 0;
              left: 0;
              width: 80px;
              height: 80px;
              opacity: 0;
          }
      }
  </style>

  <script type="module" crossorigin="" src="/assets/index-81269b7c.js"></script>
  <link rel="stylesheet" href="/assets/index-1b95fc39.css">
<style type="text/css">* {user-select: auto !important; -webkit-user-select: auto !important;}</style><input type="hidden" id="inject_idm_text_selection"><style></style><link rel="modulepreload" as="script" crossorigin="" href="/assets/AuthLayout-97cb7cd7.js"><link rel="modulepreload" as="script" crossorigin="" href="/assets/LayoutService-f49d2b06.js"><link rel="modulepreload" as="script" crossorigin="" href="/assets/config-ddff490f.js"><link rel="modulepreload" as="script" crossorigin="" href="/assets/theme-d3e5120a.js"><link rel="modulepreload" as="script" crossorigin="" href="/assets/ReloadPrompt.vue_vue_type_style_index_0_lang-d4a9e2b0.js"><link rel="stylesheet" href="/assets/ReloadPrompt-41050a64.css"><link rel="stylesheet" href="/assets/AuthLayout-e3b0c442.css"><link rel="modulepreload" as="script" crossorigin="" href="/assets/SignIn-29d847ce.js"><link rel="modulepreload" as="script" crossorigin="" href="/assets/vee-validate.esm-03a9bf9b.js"><link rel="modulepreload" as="script" crossorigin="" href="/assets/sweetalert2.esm.all-6b8774ac.js"><style>.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):focus-visible{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):focus-visible{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):focus-visible{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus-visible{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:0;padding:1em 1.6em .3em;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}</style></head>

<body class="app-blank bg-body">
<!--begin::Theme mode setup on page load-->
<script>
  if (document.documentElement) {
    let defaultThemeMode = 'system'

    let themeMode = localStorage.getItem('kt_theme_mode_value')
    if (!themeMode) {
      if (defaultThemeMode === 'system') {
        themeMode =
          window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      } else {
        themeMode = defaultThemeMode
      }
    }

    document.documentElement.setAttribute('data-bs-theme', themeMode)
  }
</script>
<!--end::Theme mode setup on page load-->
<div id="app" data-v-app=""><div class="d-flex flex-column flex-lg-row flex-column-fluid auth-layout" style=""><div class="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 p-md-0 order-2 order-lg-1"><div class="d-flex flex-center flex-column flex-lg-row-fluid"><div class="col-lg-3 col-12"><!----><div><form novalidate="" class="form w-100"><div class="fv-row mb-10 text-center"><div><h1></h1></div></div><div><!----><div class="fv-row mb-10"><label class="form-label fs-6 fw-bold text-gray-900 old-text-dark">Usuário</label><input tabindex="1" class="form-control form-control-lg form-control-solid" type="text" name="username" autocomplete="username"></div><div class="fv-row mb-10"><div class="d-flex flex-stack mb-2"><label class="form-label fw-bold text-gray-900 old-text-dark fs-6 mb-0">Senha</label></div><input tabindex="2" class="form-control form-control-lg form-control-solid" type="password" name="password" autocomplete="current-password"><div><a href="javascript:">Mostrar senha</a></div><div class="mt-8"></div><div class="mt-8 px-2 rounded" style="background: var(--bs-gray-100);"><label class="el-checkbox el-checkbox--large is-checked"><span class="el-checkbox__input is-checked"><input class="el-checkbox__original" type="checkbox" value="Verificado"><span class="el-checkbox__inner"></span></span><span class="el-checkbox__label">Verificado</span></label></div></div></div><!----><div class="text-center"><button id="kt_sign_in_submit" tabindex="3" type="submit" class="btn btn-lg btn-primary w-100 mb-5"><span class="indicator-label">Continuar</span><span class="indicator-progress">Por favor aguarde… <span class="spinner-border spinner-border-sm align-middle ms-2"></span></span></button></div></form></div><div class="mt-4 text-center text-muted">Sistema protegido contra bots e ferramentas de automação</div><div class="mt-4 text-center text-muted">v3.26</div></div></div></div></div><div id="messageModal" class="modal fade" tabindex="-1" aria-hidden="true"><div class="modal-dialog modal-dialog-centered mw-650px"><div class="modal-content"><div class="modal-header"><h2 class="fw-bold">Nova Mensagem</h2></div><div class="modal-body scroll-y"><div class="ck-content text-break"><div></div></div><div class="modal-footer flex-center justify-content-between"><button class="btn btn-lg btn-success" type="button"><span class="indicator-label">Copiar</span></button><button class="btn btn-lg btn-danger" type="button"><span class="indicator-label">Excluir</span></button><button type="button" class="btn btn-light me-3">Fechar</button></div></div></div></div></div></div>
<!--begin::Loading markup-->
<div id="splash-screen" class="splash-screen">
  <div class="lds-ripple">
    <div></div>
    <div></div>
  </div>
</div>
<!--end::Loading markup-->


<svg id="SvgjsSvg1001" width="2" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev" style="overflow: hidden; top: -100%; left: -100%; position: absolute; opacity: 0;"><defs id="SvgjsDefs1002"></defs><polyline id="SvgjsPolyline1003" points="0,0"></polyline><path id="SvgjsPath1004" d="M0 0 "></path></svg></body></html>
Canais_Netflix

#EXTINF:-1 tvg-id="aws-cloud" group-title="Informações" tvg-name="A Netflix está funcionando!" tvg-logo="https://help.nflxext.com/helpcenter/c336e9810131f82eaf84.svg",A Netflix está funcionando!
http://rebrand.ly/cola05
########################
#EXTINF:-1 tvg-id="+SBT_canais" group-title="+SBT" tvg-name="+Criança" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPKltbGEHepQEgXt4wCoz0FehGbzGSNNZhWH4v-4hxCCCk67_u6olXntCz&s=10.png"
http://fzcdn.vood.top/live/562284026/8515825/390574.m3u8
#EXTINF:-1 tvg-id="+SBT_canais" group-title="+SBT" tvg-name="+Cinema" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPKltbGEHepQEgXt4wCoz0FehGbzGSNNZhWH4v-4hxCCCk67_u6olXntCz&s=10.png",+Cinema
http://hzcdn.vood.top/live/562284026/8515825/390573.m3u8
#EXTINF:-1 tvg-id="+SBT_canais" group-title="+SBT" tvg-name="+Series" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPKltbGEHepQEgXt4wCoz0FehGbzGSNNZhWH4v-4hxCCCk67_u6olXntCz&s=10.png",+Series
http://dzcdn.vood.top/live/562284026/8515825/390580.m3u8
#EXTINF:-1 tvg-id="+SBT_canais" group-title="+SBT" tvg-name="+Novelas" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPKltbGEHepQEgXt4wCoz0FehGbzGSNNZhWH4v-4hxCCCk67_u6olXntCz&s=10.png",+Novelas
http://dzcdn.vood.top/live/562284026/8515825/390578.m3u8
#EXTINF:-1 tvg-id="canais_globo" group-title="Canais Abertos" tvg-name="TV Globo" tvg-logo="https://gkpb.com.br/wp-content/uploads/2021/12/novo-logo-da-globo-png.png",TV Globo
http://ezcdn.vood.top/live/562284026/8515825/2376.m3u8
#EXTINF:-1 tvg-id="canais_globo" group-title="Variedades" tvg-name="Viva" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Canal_Viva_2018_wordmark.svg/400px-Canal_Viva_2018_wordmark.svg.png",Viva
http://hzcdn.vood.top/live/562284026/8515825/2537.m3u8
#EXTINF:-1 tvg-id="+SBT_canais" group-title="Canais Abertos" tvg-name="SBT" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/thumb/4/41/Logotipo_do_SBT.svg/360px-Logotipo_do_SBT.svg.png",SBT
https://cdn.live.br1.jmvstream.com/w/LVW-10801/LVW10801_Xvg4R0u57n/chunklist.m3u8
#EXTINF:-1 tvg-id="tvcultura" group-title="Canais Abertos" tvg-name="TV Cultura" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Cultura_logo_2013.svg/400px-Cultura_logo_2013.svg.png",TV Cultura
http://dzcdn.vood.top/live/562284026/8515825/149.m3u8
#EXTINF:-1 tvg-id="recordtv" group-title="Canais Abertos" tvg-name="Record" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/thumb/0/0e/Logotipo_da_Record_(rede_de_televisão).png/360px-Logotipo_da_Record_(rede_de_televisão).png",Record
http://ezcdn.vood.top/live/562284026/8515825/244071.m3u8
#EXTINF:-1 tvg-id="canais_globo" group-title="Variedades" tvg-name="Multishow" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Multishow.png/400px-Multishow.png",Multishow
http://dzcdn.vood.top/live/562284026/8515825/377241.m3u8
#EXTINF:-1 tvg-id="canais_record" group-title="Noticias" tvg-name="Record News" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Record_News_logo_2023.svg/500px-Record_News_logo_2023.svg.png",Record News
http://ezcdn.vood.top/live/562284026/8515825/488.m3u8

















































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































<!DOCTYPE html><html xmlns="http://www.w3.org/1999/xhtml" dir="LTR" lang="pt"><head>
    <meta charset="utf-8">
    <meta name="_csrf" content="cab82c36-44e2-4046-a146-e5d02efe5368">
    <meta http-equiv="X-UA-Compatible" content="IE=edge;chrome=1">
    <meta name="google-site-verification" content="GmHfooq7jctbhvRUSGtLpE_XImtIATNo0iLofqbb16I">
    <meta name="google-site-verification" content="pmHhB6aGnjhY8K733ElVmlTDLHz7qzkA6NA__G40QUc">
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
    <meta name="apple-touch-icon" content="https://assets.nflxext.com/en_us/layout/ecweb/netflix-app-icon_152.jpg">
    <link rel="apple-touch-icon" sizes="152x152" href="https://assets.nflxext.com/en_us/layout/ecweb/netflix-app-icon_152.jpg">
    <link rel="dns-prefetch" href="https://help.nflxext.com/">
    <link rel="dns-prefetch" href="https://assets.nflxext.com/">

    
    <title>A Netflix está fora do ar? | Status do serviço Netflix | Centro de ajuda Netflix</title>

    <link rel="shortcut icon" href="https://help.nflxext.com/nficon2023.ico">
    <link rel="stylesheet" href="https://help.nflxext.com/helpcenter/common_df8f40d215f7d0cc9b79.css">

    
    <script src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js" type="text/javascript" charset="UTF-8" data-domain-script="87b6a5c0-0104-4e96-a291-092c11350111"></script><style type="text/css">* {user-select: auto !important; -webkit-user-select: auto !important;}</style><input type="hidden" id="inject_idm_text_selection"><style></style>
    <script type="text/javascript">
        function OptanonWrapper() {}
    </script>


    
    <meta name="description" content="Consulte este artigo para saber como determinar se a Netflix está fora do ar.">
    <meta property="og:description" content="Consulte este artigo para saber como determinar se a Netflix está fora do ar.">
  </head>
  <body class="page-is-netflix-down">
    




    <div class="global-container">
      




<div class="global-header  ">
    <div class="overlay"></div>

    <div class="container">
        <div class="inner-container">
            <div class="branding">
                <a class="logo nf-logo-link n-logo" href="https://netflix.com" title="Netflix">
                    <svg class="netflix-svg" width="88px" height="32px" viewBox="0 0 111 30" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#e50914" d="M105.062 14.28L111 30c-1.75-.25-3.499-.563-5.28-.845l-3.345-8.686-3.437 7.969c-1.687-.282-3.344-.376-5.031-.595l6.031-13.75L94.468 0h5.063l3.062 7.874L105.875 0h5.124l-5.937 14.28zM90.47 0h-4.594v27.25c1.5.094 3.062.156 4.594.343V0zm-8.563 26.937c-4.187-.281-8.375-.53-12.656-.625V0h4.687v21.875c2.688.062 5.375.28 7.969.405v4.657zM64.25 10.657v4.687h-6.406V26H53.22V0h13.125v4.687h-8.5v5.97h6.406zm-18.906-5.97V26.25c-1.563 0-3.156 0-4.688.062V4.687h-4.844V0h14.406v4.687h-4.874zM30.75 15.593c-2.062 0-4.5 0-6.25.095v6.968c2.75-.188 5.5-.406 8.281-.5v4.5l-12.968 1.032V0H32.78v4.687H24.5V11c1.813 0 4.594-.094 6.25-.094v4.688zM4.78 12.968v16.375C3.094 29.531 1.593 29.75 0 30V0h4.469l6.093 17.032V0h4.688v28.062c-1.656.282-3.344.376-5.125.625L4.78 12.968z"></path>
                    </svg>
                    <svg class="n-svg" focusable="true" viewBox="225 0 552 1000" height="32px">
                        <defs>
                            <radialGradient id="54260309-7575-46f4-a806-31673acf60fe-a" r="75%" gradientTransform="matrix(.38 0 .5785 1 .02 0)">
                                <stop offset="60%" stop-opacity=".3"></stop>
                                <stop offset="90%" stop-opacity=".05"></stop>
                                <stop offset="100%" stop-opacity="0"></stop>
                            </radialGradient>
                        </defs>
                        <path d="M225 0v1000c60-8 138-14 198-17V0H225" fill="#b1060e"></path>
                        <path d="M579 0v983c71 3 131 9 198 17V0H579" fill="#b1060e"></path>
                        <path d="M225 0v200l198 600V557l151 426c76 3 136 9 203 17V800L579 200v240L423 0H225" fill="url(#54260309-7575-46f4-a806-31673acf60fe-a)"></path>
                        <path d="M225 0l349 983c76 3 136 9 203 17L423 0H225" fill="#e50914"></path>
                    </svg>
                </a>
                <a class="helpcenter-logo" href="/pt">Central de Ajuda</a>

            </div>

            <div class="actions">
                <ul class="nav navbar-nav member-sign-in account-dropdown pull-right">
                    <li class="dropdown">
                        <a href="#" class="btn btn-med hc-profile-name dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">drakoz00023</a>
                        <ul class="dropdown-menu" role="menu">
                            <li>
                                <a href="https://netflix.com/YourAccount" class="your-account-link">Conta</a>
                            </li>
                            <li>
                                <a href="https://netflix.com/SignOut?lnkctr=mL" class="signout-link">Sair da Netflix</a>
                            </li>
                        </ul>
                    </li>
                </ul>

                
            </div>
        </div>

        <div class="logo-wrapper">
            <a class="helpcenter-logo" href="/pt">Central de Ajuda</a>
        </div>
    </div>
</div>


      
        <div class="notifications">
    <div id="notification-holder"><div class="global-notifications"></div></div>
</div>

        <div id="personalization-placeholder"></div>
      

      <div class="global-content">
        

            <div class="container">
                <ul class="breadcrumb">
  <li>
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M4.81 8.74697H13.9966V7.24697H4.81095L7.52932 4.52961L6.46886 3.46875L2.46959 7.46654C2.32891 7.60716 2.24985 7.79791 2.24982 7.99683C2.24978 8.19574 2.32876 8.38652 2.46939 8.5272L6.46866 12.528L7.52952 11.4675L4.81 8.74697Z" fill="black"></path>
    </svg>
  </li>
  <li>
    <a href="/pt">Voltar à página inicial da ajuda</a>
  </li>
  
  
  
</ul>


                <section>
                    <h1>A Netflix está fora do ar?</h1>

                    <div id="down-notifications">
                        <div class="down-notification">
                            <div class="down-notification-content">
                                <h2>A Netflix está funcionando!</h2>
                                <p>Não estamos com problemas de interrupção no serviço de transmissão online.</p>
                            </div>
                            <div class="down-notification-indicator">
                                <i class="hcicon-uma-check"></i>
                            </div>
                        </div>
                    </div>

                    <hr>

                    <p>Nós nos esforçamos para disponibilizar seus filmes e séries favoritos sempre que você quiser assistir, mas, em ocasiões muito raras, o serviço pode ficar indisponível. Se estivermos passando por uma interrupção no serviço de transmissão, atualizaremos esta página com uma descrição do problema.</p>

                    
                        <h3>Ainda está com problemas?</h3>

                        <p>
                            Se o seu problema não estiver listado acima, faça uma busca no Centro de ajuda pelo código de erro ou problema enfrentado. 
                        </p>

                        <div class="search-form-container">
    <div id="search-placeholder"><form action="/pt/search" method="GET"><div class="input-group"><div role="combobox" aria-haspopup="listbox" aria-owns="react-autowhatever-1" aria-expanded="false" class="react-autosuggest__container"><div class="search-control-wrapper"><input type="text" autocomplete="off" aria-autocomplete="list" aria-controls="react-autowhatever-1" class="form-control" name="q" id="search-input" placeholder="Buscar" aria-label="Buscar" value=""><button class="search-control" type="submit" tabindex="-1">Buscar</button></div><div id="react-autowhatever-1" role="listbox" class="react-autosuggest__suggestions-container"></div></div></div></form></div>
</div>

                    
                </section>
            </div>
        
      </div>

      <div class="footer-push"></div>
    </div>

    



<div class="global-page-footer">
    <div class="global-page-contactbar">
  <div class="container">
    <div class="wrapper">
      <h3 class="bar-title">Precisa de mais ajuda?</h3>
      <a id="contact-us-button" href="/pt/contactus" class="h-btn btn-primary-dark">Entre em contato</a>
    </div>
  </div>
</div>


    <div class="container">

        
        
            <div id="lang-switcher-wrapper" class="select-wrapper">
                <div class="select select-grey">
                    <label for="lang-switcher" id="lang-switcher-label" class="sr-only">Selecione seu idioma preferido:</label>
                    <select id="lang-switcher" title="Selecione seu idioma preferido:" aria-label="Selecione seu idioma preferido:">
                        <option value="" disabled="" selected="">Selecione um idioma</option>
                        
                            <option value="en">English</option>
                        
                            <option value="pt" selected="selected">Português</option>
                        
                    </select>

                    <svg width="24px" height="24px" viewBox="0 0 24 24">
    <path d="M12.9416531,7.71264972 L17.9520258,15.2282087 C18.4421897,15.9634546 18.2435115,16.9568456 17.5082656,17.4470095 C17.2454376,17.6222282 16.9366253,17.715729 16.6207453,17.715729 L6.6,17.715729 C5.7163444,17.715729 5,16.9993846 5,16.115729 C5,15.799849 5.09350084,15.4910367 5.26871953,15.2282087 L10.2790922,7.71264972 C10.7692561,6.97740382 11.7626471,6.77872563 12.497893,7.26888957 C12.6736566,7.38606534 12.8244774,7.53688606 12.9416531,7.71264972 Z" transform="translate(11.610458, 12.357865) scale(1, -1) translate(-11.610458, -12.357865) "></path>
</svg>

                </div>
            </div>
        

        <ul class="footer-links">
            <li class="footer-link">
                <a href="/pt/legal/termsofuse">Termos de uso</a>
            </li>
            <li class="footer-link">
                <a href="/pt/legal/privacy">Privacidade</a>
            </li>
            

            

            <li class="footer-link">
                <a href="/pt/legal/privacy#cookies" class="evidon-trigger toggle-cookie-info">Preferências de cookie</a>
            </li>
            
                
                
                <li class="footer-link">
                    <a href="/pt/legal/corpinfo">Informações corporativas</a>
                </li>
            
        </ul>
    </div>
</div>


    
    <script>
/*<![CDATA[*/
    window.netflix = {
        i18n: {
            "locale": "pt"
        },
        urls: {
            "base": "https:\/\/help.netflix.com",
            "signIn": "https:\/\/netflix.com" + "/Login?locale=" + "pt" + "&nextpage=" + encodeURIComponent(window.location.href),
            "signUp": "https:\/\/netflix.com\/signup",
            "signInHelp": "https:\/\/netflix.com" + "/LoginHelp?locale=" + "pt"
        },
        config: {
            "page": "IsNetflixDown",
            "chatCookieName": "cseChatSessionId",
            "chatForce": true,
            "clBatchInterval": 10000,
            "q": null,
            "oneTrust": true,
            "searchAutocompleteEnabled": true
        },
        data: {
            "source": "helpCenter",
            "survey": null,
            "sourceHiddenLinks": false,
            "tests": "65654~2~65451~3~64895~1",
            "isRtl": false,
            "isAgent": false,
            "geoCountry": "BR",
            "isMember": false,
            "isMemberSignedIn": true,
            phone: {
                "appHelpDeepLink": "https:\/\/netflix.com\/mobilehelp",
                "enablePhoneMobileDeepLink": false
            },
            article: {
                "lang": null,
                "tnid": null,
                "alias": null,
                "nodeid": null,
                "allCountries": null,
                "defaultCountry": null,
                "legalDocument": false,
                "selectedCountry": null,
                "specifiedCountry": null
            }
        },
        l10n: {
            "localeOverride": "pt",
            "no": "N\u00E3o",
            "yes": "Sim",
            "close": "Fechar",
            "not.sure": "N\u00E3o sei",
            "next": "Pr\u00F3ximo",
            "other": "Outro",
            "search": "Buscar",
            "submit": "Enviar",
            "sign.in": "Acessar",
            "sign.up": "Assine a Netflix",
            "get.help": "Ajuda",
            "skip": "Ignorar",
            "previous": "Anterior",
            "optional": "(Opcional) N\u00F3s n\u00E3o respondemos a coment\u00E1rios individuais. N\u00E3o deixe informa\u00E7\u00F5es pessoais.",
            "learn.more": "Saiba mais",
            "help.center": "Central de Ajuda",
            "skip.for.now": "Deixar para depois",
            "read.article": "Ler o artigo",
            "call.us.in.app": "Ligue para n\u00F3s pelo aplicativo",
            "what.went.wrong": "O que deu errado?",
            "select.a.country": "Selecione um pa\u00EDs",
            "already.a.member": "J\u00E1 \u00E9 assinante?",
            "no.results.found": "Nenhum resultado encontrado",
            "not.ready.to.signin": "N\u00E3o est\u00E1 pronto para acessar sua conta?",
            "recommended.for.you": "Sugest\u00F5es para voc\u00EA",
            "need.help.signing.in": "Precisa de ajuda para acessar?",
            "thanks.for.your.feedback": "Obrigado por enviar seus coment\u00E1rios.",
            "was.this.article.helpful": "Este artigo foi \u00FAtil?",
            "padme.search.kb.noresults": "Nenhum resultado encontrado",
            "additional.search.results": "Resultados adicionais de busca",
            "the.steps.did.not.resolve": "Os passos do artigo n\u00E3o resolveram o meu problema",
            "the.wording.was.confusing": "A escolha das palavras usadas no artigo o tornou confuso",
            "what.do.you.need.help.with": "Como podemos ajudar?",
            "the.article.did.not.address": "Este artigo n\u00E3o foi relevante para a minha busca",
            "padme.pages.did.this.resolve": "Essas informa\u00E7\u00F5es resolveram o problema?",
            "sign.in.for.personalized.help": "Acesse sua conta para obter ajuda personalizada",
            "let.us.know.how.we.can.improve": "(Opcional) Diga como podemos melhorar. N\u00F3s n\u00E3o respondemos a coment\u00E1rios individuais. N\u00E3o deixe informa\u00E7\u00F5es pessoais.",
            "note.currently.unable.to.respond": "Observa\u00E7\u00E3o: no momento, n\u00E3o podemos responder aos coment\u00E1rios individualmente",
            "currently.viewing.information.for": "Consultando informa\u00E7\u00F5es referentes a:",
            "thanks.for.your.feedback.improvement": "Obrigado por enviar seus coment\u00E1rios! Alguma sugest\u00E3o de melhoria?",
            "information.not.available.for.country": "Desculpe, esta informa\u00E7\u00E3o n\u00E3o est\u00E1 dispon\u00EDvel para {0}.",
            "viewing.information.intended.for.country": "As informa\u00E7\u00F5es que voc\u00EA est\u00E1 consultando s\u00E3o v\u00E1lidas para <strong>{0}<\/strong> e podem n\u00E3o se aplicar \u00E0 sua assinatura Netflix. Selecione seu pa\u00EDs abaixo.",
            "padme.pages.isnetflixdown.status.up.body": "N\u00E3o estamos com problemas de interrup\u00E7\u00E3o no servi\u00E7o de transmiss\u00E3o online.",
            "padme.pages.isnetflixdown.status.up.header": "A Netflix est\u00E1 funcionando!",
            "characters.left": "[NUMBER] caracteres restantes",
            "describe.your.issue": "Descreva seu problema",
            "chat.recording.notice": "Para melhorar o atendimento ao cliente da Netflix, podemos monitorar ou gravar os bate-papos.",
            "received.and.email.about.account": "Recebi um email sobre altera\u00E7\u00E3o do email da conta",
            "netflix.says.cant.find.account": "Mensagem da Netflix: \u201CN\u00E3o encontramos uma conta com este email\u201D",
            "please.provide.a.short.description": "Informe uma breve descri\u00E7\u00E3o de seu problema",
            "recommended.popular.topics": "Principais assuntos",
            "padme.pages.contactus.chatbox.title": "Atendimento ao cliente da Netflix",
            "chat.contactus.chatbox.endchat.question": "Finalizar bate-papo?",
            "chat.contactus.chatbox.end": "Encerrar",
            "padme.pages.contactus.chatbox.submit": "Enviar",
            "padme.pages.contactus.chatbox.cancel": "Cancelar",
            "chat.new.message": "Nova mensagem",
            "chat.ewt.wait.time": "Tempo de espera: {0} minutos",
            "chat.write.reply": "Insira uma resposta",
            "chat.mop.enter.new.payment": "Insira a nova forma de pagamento",
            "chat.mop.enter.new.payment.verification": "Informe os dados de pagamento para verifica\u00E7\u00E3o",
            "chat.mop.agentname.cant.see": "{0} n\u00E3o pode ver isto",
            "chat.mop.agent.cant.see": "O agente n\u00E3o pode ver isto",
            "chat.email.chat.transcript": "Informe o email para enviarmos a transcri\u00E7\u00E3o do bate-papo",
            "chat.email.chat.transcript.sent": "Transcri\u00E7\u00E3o enviada!",
            "padme.pages.contactus.chatbox.transcript": "Quero receber uma c\u00F3pia desta conversa por email",
            "chat.email.sent.transcript.email": "A transcri\u00E7\u00E3o desta sess\u00E3o de bate-papo foi enviada para o email informado.",
            "chat.mop.first.name.required": "O nome \u00E9 obrigat\u00F3rio",
            "chat.mop.last.name.required": "O sobrenome \u00E9 obrigat\u00F3rio",
            "chat.mop.card.required": "O n\u00FAmero do cart\u00E3o de cr\u00E9dito ou d\u00E9bito \u00E9 obrigat\u00F3rio",
            "chat.mop.zip.code.required": "O CEP \u00E9 obrigat\u00F3rio",
            "chat.mop.cvv": "C\u00F3digo de seguran\u00E7a (CVV)",
            "chat.mop.cvv.required": "O c\u00F3digo de seguran\u00E7a (CVV) \u00E9 obrigat\u00F3rio",
            "chat.mop.expiration.required": "A data de validade \u00E9 obrigat\u00F3ria",
            "chat.mop.expiration.format": "A data de validade deve estar no formato MM\/AAAA",
            "chat.mop.invalid.exp": "Data de validade inv\u00E1lida",
            "chat.mop.first.name": "Nome registrado no cart\u00E3o",
            "chat.mop.last.name": "Sobrenome registrado no cart\u00E3o",
            "chat.mop.zip": "CEP do endere\u00E7o de cobran\u00E7a",
            "chat.mop.number": "N\u00FAmero do cart\u00E3o",
            "chat.mop.last.eight.digits.of.number": "\u00DAltimos 8 d\u00EDgitos do n\u00FAmero do cart\u00E3o",
            "chat.mop.expiration": "Data de validade (MM\/AAAA)",
            "chat.mop.dob": "Data de nascimento (AAAA-MM-DD)",
            "chat.mop.dob.required": "A data de nascimento \u00E9 obrigat\u00F3ria",
            "padme.pages.chat.mop.eudd": "No. da conta do d\u00E9bito em conta:",
            "padme.pages.chat.mop.upi": "ID do UPI:",
            "padme.pages.chat.mop.upi.invalid": "Informe um ID do UPI v\u00E1lido",
            "chat.mop.upi.required": "O ID do UPI \u00E9 obrigat\u00F3rio",
            "chat.mop.account.number.required": "O n\u00FAmero da conta \u00E9 obrigat\u00F3rio",
            "chat.mop.routing.number.required": "O n\u00FAmero de roteamento \u00E9 obrigat\u00F3rio",
            "chat.mop.digit.required": "O d\u00EDgito verificador \u00E9 obrigat\u00F3rio",
            "chat.mop.branch.number": "N\u00FAmero da ag\u00EAncia",
            "chat.mop.routing.number": "N\u00FAmero de roteamento",
            "chat.mop.account.number": "N\u00FAmero da conta",
            "chat.mop.digit": "D\u00EDgito",
            "chat.mop.card.invalid": "O n\u00FAmero do cart\u00E3o de cr\u00E9dito ou d\u00E9bito \u00E9 inv\u00E1lido",
            "chat.mop.paypal.billing.id.required": "O ID de faturamento BA \u00E9 obrigat\u00F3rio",
            "chat.mop.paypal.billing.id.valid": "O ID de faturamento BA precisa ser v\u00E1lido",
            "chat.mop.paypal.billing.id": "ID de faturamento do PayPal",
            "chat.resolve.issue": "Resolvemos o seu problema?",
            "padme.pages.contactus.chatbox.send": "Enviar",
            "padme.pages.contactus.chatbox.endchat": "Finalizar bate-papo",
            "padme.pages.contactus.chatbox.clickhere": "Clique aqui",
            "padme.pages.contactus.chatbox.welcome": "Obrigado por usar o bate-papo da Netflix",
            "chat.mop.bank.name": "Nome do banco",
            "chat.mop.bank.name.required": "O nome do banco \u00E9 obrigat\u00F3rio",
            "chat.mop.account.type": "Tipo de conta",
            "chat.mop.account.type.required": "O tipo de conta \u00E9 obrigat\u00F3rio",
            "chat.mop.account.type.CHECKING": "Conta corrente",
            "chat.mop.account.type.SAVINGS": "Conta poupan\u00E7a",
            "netflix": "Netflix",
            "chat.mop.dob.invalid": "Uma data de nascimento v\u00E1lida \u00E9 obrigat\u00F3ria",
            "netflix.connecting": "Conectando", 
	#EXTINF:-1 tvg-id="netflix-info" group-title="Informações" tvg-name="A Netflix está funcionando!" tvg-logo="https://help.nflxext.com/helpcenter/c336e9810131f82eaf84.svg",A Netflix está funcionando!
cdn22.cc/2223060/78647/168251.m3u8
            "padme.pages.contactus.chat.chatEnded": "Esta sess\u00E3o de atendimento online foi encerrada.",
            "difficult": "Dif\u00EDcil",
            "dissatisfied": "Insatisfeito",
            "dont.know.not.applicable": "N\u00E3o sei \/ N\u00E3o aplic\u00E1vel",
            "easy": "F\u00E1cil",
            "neutral": "Neutro",
            "satisfied": "Satisfeito",
            "very.difficult": "Muito dif\u00EDcil",
            "very.dissatisfied": "Muito insatisfeito",
            "very.easy": "Muito f\u00E1cil",
            "very.satisfied": "Muito satisfeito",
            "you.can.start.a.new.chat": "Voc\u00EA pode <button>iniciar um novo bate-papo<\/button>.",
            "your.issue": "Seu problema:",
            "tell.us.more": "Conte-nos mais para sugerirmos a melhor solu\u00E7\u00E3o",
            "get.in.touch": "Entre em contato:",
            "try.these.recommendations": "Tente estas recomenda\u00E7\u00F5es:",
            "recommended": "Recomendado",
            "describe.your.issue.placeholder": "Descreva seu problema"
        }
    };
/*]]>*/
</script>


    <script crossorigin="anonymous" src="https://help.nflxext.com/helpcenter/manifest_b4b5aa08441a2eda054f.js"></script>
    <script crossorigin="anonymous" src="https://help.nflxext.com/helpcenter/common_b3b80fe8eca9e55cc5dc.js"></script>

    
    
            <script crossorigin="anonymous" src="https://help.nflxext.com/helpcenter/is-netflix-down_bac4a4839ac733b98775.js"></script>
        

    <script crossorigin="anonymous" src="/interface/chat/supportscript?forceCountry=BR&amp;locale=pt"></script>


  

</body></html>
#EXTINF:-1 tvg-id="netflix-info" group-title="Informações" tvg-name="A Netflix está funcionando!" tvg-logo="https://help.nflxext.com/helpcenter/c336e9810131f82eaf84.svg",A Netflix está funcionando!
cdn22.cc/2223060/78647/168251.m3u8
