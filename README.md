# Available Tools and Their Usage

## execute_command
- **Description:** Request to execute a CLI command on the system.
- **Usage:** <execute_command><command>Your command here</command><requires_approval>true or false</requires_approval></execute_command>

## read_file
- **Description:** Request to read the contents of a file at the specified path.
- **Usage:** <read_file><path>File path here</path><start_line>1</start_line><end_line>1000</end_line></read_file>

## write_to_file
- **Description:** Request to write content to a file at the specified path.
- **Usage:** <write_to_file><path>File path here</path><content>Your file content here