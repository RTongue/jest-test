oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g lunch-money
$ lunch-money COMMAND
running command...
$ lunch-money (--version)
lunch-money/0.0.0 darwin-x64 node-v19.8.1
$ lunch-money --help [COMMAND]
USAGE
  $ lunch-money COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`lunch-money hello PERSON`](#lunch-money-hello-person)
* [`lunch-money hello world`](#lunch-money-hello-world)
* [`lunch-money help [COMMANDS]`](#lunch-money-help-commands)
* [`lunch-money plugins`](#lunch-money-plugins)
* [`lunch-money plugins:install PLUGIN...`](#lunch-money-pluginsinstall-plugin)
* [`lunch-money plugins:inspect PLUGIN...`](#lunch-money-pluginsinspect-plugin)
* [`lunch-money plugins:install PLUGIN...`](#lunch-money-pluginsinstall-plugin-1)
* [`lunch-money plugins:link PLUGIN`](#lunch-money-pluginslink-plugin)
* [`lunch-money plugins:uninstall PLUGIN...`](#lunch-money-pluginsuninstall-plugin)
* [`lunch-money plugins:uninstall PLUGIN...`](#lunch-money-pluginsuninstall-plugin-1)
* [`lunch-money plugins:uninstall PLUGIN...`](#lunch-money-pluginsuninstall-plugin-2)
* [`lunch-money plugins update`](#lunch-money-plugins-update)

## `lunch-money hello PERSON`

Say hello

```
USAGE
  $ lunch-money hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/RTongue/lunch-money/blob/v0.0.0/dist/commands/hello/index.ts)_

## `lunch-money hello world`

Say hello world

```
USAGE
  $ lunch-money hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ lunch-money hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [dist/commands/hello/world.ts](https://github.com/RTongue/lunch-money/blob/v0.0.0/dist/commands/hello/world.ts)_

## `lunch-money help [COMMANDS]`

Display help for lunch-money.

```
USAGE
  $ lunch-money help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for lunch-money.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.19/src/commands/help.ts)_

## `lunch-money plugins`

List installed plugins.

```
USAGE
  $ lunch-money plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ lunch-money plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.7.0/src/commands/plugins/index.ts)_

## `lunch-money plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ lunch-money plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ lunch-money plugins add

EXAMPLES
  $ lunch-money plugins:install myplugin 

  $ lunch-money plugins:install https://github.com/someuser/someplugin

  $ lunch-money plugins:install someuser/someplugin
```

## `lunch-money plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ lunch-money plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ lunch-money plugins:inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.7.0/src/commands/plugins/inspect.ts)_

## `lunch-money plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ lunch-money plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ lunch-money plugins add

EXAMPLES
  $ lunch-money plugins:install myplugin 

  $ lunch-money plugins:install https://github.com/someuser/someplugin

  $ lunch-money plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.7.0/src/commands/plugins/install.ts)_

## `lunch-money plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ lunch-money plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ lunch-money plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.7.0/src/commands/plugins/link.ts)_

## `lunch-money plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ lunch-money plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ lunch-money plugins unlink
  $ lunch-money plugins remove
```

## `lunch-money plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ lunch-money plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ lunch-money plugins unlink
  $ lunch-money plugins remove
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.7.0/src/commands/plugins/uninstall.ts)_

## `lunch-money plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ lunch-money plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ lunch-money plugins unlink
  $ lunch-money plugins remove
```

## `lunch-money plugins update`

Update installed plugins.

```
USAGE
  $ lunch-money plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.7.0/src/commands/plugins/update.ts)_
<!-- commandsstop -->
