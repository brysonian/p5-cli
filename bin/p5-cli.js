#!/usr/bin/env node
'use strict';

// Use commander to define CLI commands
var program = require( 'commander' );

// Get version from package.json
var appVersion = require( '../package' ).version;

// Link to the definition of the "serve" CLI subcommand
var serveCommand = require( '../commands/serve' );

// Create the CLI application object
var p5cli = program.version( appVersion );

// Define `p5 serve` command
p5cli.command( 'serve' )

  // Add the `p5 run` alias for this command
  .alias( 'run' )

  // Provide descriptive text that will display when running `p5 serve --help`
  .description( 'Start a local server to run a p5 sketch' )

  // Permit specifying a relative path to serve instead of the cwd
  .option( '[directory]', 'Relative path to a directory to serve (defaults to the current directory)' )

  // Optionally serve an HTML page loading an arbitrary JavaScript file,
  // instead of the current working directory
  .option( '-s, --sketch [file]', 'Relative path to a JavaScript sketch file to use (optional)' )

  // Permit overriding the :4444 port default for the local server
  .option( '-p, --port [port]', 'HTTP port on which to start the server', '4444' )

  // Run the "serve" command with the provided CLI options
  .action( serveCommand );

// Kick off command parsing & execution
p5cli.parse( process.argv );
