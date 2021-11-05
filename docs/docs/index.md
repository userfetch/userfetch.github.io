# Docs

[[toc]]

## CLI

<table>
    <tr>
      <th>Flag</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
    <tr>
        <td><code>-h</code> <code>--help</code></td>
        <td><em>[boolean] [optional]</em></td>
        <td>Show help</td>
    </tr>
    <tr>
        <td><code>-v</code> <code>--version</code></td>
        <td><em>[boolean] [optional]</em></td>
        <td>Show version number</td>
    </tr>
    <tr>
        <td><code>-u</code> <code>--user</code></td>
        <td><em>[string] [optional]</em></td>
        <td>Login of the user to fetch.<br>If none, your data will be fetched</td>
    </tr>
    <tr>
        <td><code>-c</code> <code>--config</code></td>
        <td><em>[string] [optional]</em></td>
        <td>Path to a custom <code>.mjs</code> config file</td>
    </tr>
    <tr>
        <td><code>-s</code> <code>--svg</code></td>
        <td><em>[string] [optional]</em></td>
        <td><blockquote>not yet implemented</blockquote>Path to save svg output to</td>
    </tr>
    <tr>
        <td><code>-t</code> <code>--token</code></td>
        <td><em>[boolean] [optional]</em></td>
        <td>Asks for your GitHub PAT through stdin<br>The token must have <code>repo</code>, <code>read:org</code>, <code>read:user</code>, and <code>user:email</code> scopes</td>
    </tr>
    <tr>
        <td><code>--ci</code></td>
        <td><em>[boolean] [optional]</em></td>
        <td>Continuous Integration mode<br>Disables writing to and reading of config dir<br>Requires <code>--config</code><br>Disables <code>--token</code> <code>--first-run</code></td>
    </tr>
    <tr>
        <td><code>--no-color</code> <code>--nocolor</code></td>
        <td><em>[boolean] [optional]</em></td>
        <td><blockquote>not yet implemented</blockquote>Disables colored output in terminal</td>
    </tr>
    <tr>
        <td><code>--first-run</code> <code>--firstrun</code></td>
        <td><em>[boolean] [optional]</em></td>
        <td><blockquote>WARNING: This will overwrite your config file with default one</blockquote>Trigger the firstrun script</td>
    </tr>
    <tr>
        <td><code>-d</code> <code>--debug</code></td>
        <td><em>[boolean] [optional]</em></td>
        <td>Show additional debugging output<br>You can use this to find all variables that can used in the config file</td>
    </tr>
</table>



## config.mjs

This file contains all customizable options. It must export `template` and `templateDeafult` functions.

`symbols`, `colors`, `meta`, and `terminal` are optional.



-----

### template / templateDefault

Use the `template` function to create a personal template for yourself. Use `templateDefault` to create a generic template for all users.

Available functions inside the template function (first argument)



#### ascii(import.meta.url, "./path/to/ascii.art")

Draw the ascii art from file. The path is relative to this config file

```js
ascii(imports.meta.url, "./path/to/ascii-art")
```



#### title(string)

Displays the string in bold, primary color

```js
title("Your Username ...")
```



#### underline()

Underlines the previous line

```js
underline()
```



#### info(string, string)

Display a key-value pair

```js
info("Twitter", "@whatever")
```



#### list(string, string[])

Display an unordered list

```js
list("Languages", ["JavaScript", "Python"])
```



#### text(string)

Insert plain text

```js
text("Elit enim officia veniam minim ullamco aute culpa qui esse occaecat Lorem ut pariatur eiusmod.")
```



#### bar(string, number)

> not yet implemented

```js
bar("idk", 85)
```



#### blank()

Insert a blank line

```js
blank()
```



#### raw(string)

Use Chalk`s tagged template syntax to colorize the output

```js
raw("Hello {green World}!")
```



#### left()

Switch to the left column

```js
left()
```



#### right()

Switch to the right column

```js
right()
```



#### variables

The second argument to the template function. To see the complete list run `userfetch -debug`

`username`, `name`, `email`, `location`, `bio`, `status`, `followers`, `following`, `sponsors`, `sponsoring`, `gists`, `organizations`, `contributedTo`, `packages`, `projects`, `pullRequests`, `issues`, `starred`, `commits`, `repositories` ...



-----

### colors

This is an optional export. It can have `primary`, `secondary`, `tertiary`, `alternate` keys. The possible color values are `"black"`, `"red"`, `"green"`, `"yellow"`, `"blue"`, `"magenta"`, `"cyan"`, `"white"`, `"blackBright"`, `"redBright"`, `"greenBright"`, `"yellowBright"`, `"blueBright"`, `"magentaBright"`, `"cyanBright"`, `"whiteBright"`
#### primary

Used in titles and info key

#### secondary

Used in text, list text, info value

#### tertiary

Used to color symbols like bullets and underline

#### alternate

Used to color the ascii art



-----

### symbols

#### underline
#### infoSeparator
#### listMarker



-----

### terminal

This is an optional export. These color values will be used to colorize the SVG output.

> not yet implemented

#### background

background color of the terminal

#### black / red / green / yellow / blue / magenta / cyan / white

#### blackBright / redBright / greenBright / yellowBright / blueBright / magentaBright / cyanBright / whiteBright