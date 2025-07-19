import * as lib from '.'

const DATA = `
# Create a resource group
variable "azureRegion" {
  type = string
  default = "uksouth"
}
resource "azurerm_resource_group" "example" {
  name     = "example-resources"
  location = var.azureRegion
}
`
const obj = await lib.deserialize( DATA )
// const string = await lib.serialize( obj )

console.dir( { obj }, { depth: null } )
