import {
	deserialize,
	serialize,
} from '../dist/index.js' // for test

const data = `
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
`

const obj = await deserialize( data )
console.log( 'Deerialize' )
console.log( obj )
const string = await serialize( obj )
console.log( 'Serialize' )
console.log( string )
