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
    port: 8000,
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
nms.on('preConnect',(id,StreamPath,args) => {
    console.log(id,StreamPath,args)
})
const express = require('express')
const app = express()
const port = 4000
app.get('*', (req, res) => {
  nms.run();
  // nms.on('')
  res.send('ok')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})