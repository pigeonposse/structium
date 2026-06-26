import {
	getDirFromURL, Tools,
} from '@structium/repo-config/example'

import type {
	deserialize, serialize,
} from '.'

const tools = new Tools<typeof deserialize, typeof serialize>( { packageDir: getDirFromURL( import.meta.url, '..' ) } )

await tools.run( `
function greet(name)
  print("Hello, " .. name)
end

greet("World")
` )

await tools.run( `
-- Function to calculate grades and determine status
local function processStudents(list)
    local results = {}
    
    for name, grade in pairs(list) do
        local status = (grade >= 6) and "Passed" or "Failed"
        table.insert(results, {name = name, score = grade, status = status})
    end
    
    return results
end

-- Test data
local grades = {
    ["Ana"] = 8.5,
    ["Luis"] = 4.0,
    ["Maria"] = 7.2
}

-- Execution
local report = processStudents(grades)

for _, info in ipairs(report) do
    print(string.format("Student: %s | Score: %.1f | Status: %s", 
          info.name, info.score, info.status))
end
` )

await tools.runError( `
local function calculate(a, b)
    -- Intentional error: Trying to add a number to an undefined variable
    return (a / b) + undefinedVariable
end

print("Attempting to perform an invalid operation...")
local result = calculate(10, 2)
print("Result: " .. result)	
`, { deserialize: { wait: true } } )
