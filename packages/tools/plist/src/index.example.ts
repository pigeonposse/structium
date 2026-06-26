import {
	getDirFromURL, Tools,
} from '@structium/repo-config/example'

import type {
	deserialize, serialize,
} from '.'

const tools = new Tools<typeof deserialize, typeof serialize>( { packageDir: getDirFromURL( import.meta.url, '..' ) } )

await tools.run( `
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  <dict>
    <key>metadata</key>
    <dict>
      <key>bundle-identifier</key>
      <string>com.company.app</string>
      <key>bundle-version</key>
      <string>0.1.1</string>
      <key>kind</key>
      <string>software</string>
      <key>title</key>
      <string>AppName</string>
    </dict>
  </dict>
</plist>
` )

