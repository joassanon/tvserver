const NodeMediaServer = require('node-media-server');

const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: 80,
    mediaroot: './media',
    allow_origin: '*'
  },
  //   auth: {
  //     play: true,
  //     publish: true,
  //     secret: 'nodemedia2017privatekey'
  //   },
  //   trans: {
  //     ffmpeg: '/usr/local/bin/ffmpeg',
  //     tasks: [
  //       {
  //         app: 'live',
  //         mp4: true,
  //         mp4Flags: '[movflags=frag_keyframe+empty_moov]',
  //       }
  //     ]
  //   }
};

var nms = new NodeMediaServer(config)
nms.on('preConnect',(...args) => {
    console.log(...args)
})
  nms.run();