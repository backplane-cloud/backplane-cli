# backplane-cli

Backplane CLI client.

![Backplane Logo](backplane-logo-black.svg)

## CLI Download & Installation

- Download the Backplane CLI either from NPM or a pre-compiled binary for your OS.

- Access the CLI User Guide from:

  [https://getbackplane.io/blog/cli-userguide](http://getbackplane.io/blog/cli-userguide)

### Binaries

The easiest way to get started is to download the Backplane CLI executable, available as a ZIP archive containing **bp** executable and **bp.sha256**
| Operating System | Download Link |
| :---------------------------------------------------------- | :----------------------------------------------- |
| <img  height="15" src="bin/assets/appleicon.svg" /> Mac OSX | [ARM64](http://getbackplane.io/cli/mac/bp.zip) |
| <img height="15" src="bin/assets/windows.svg" /> Windows | [x64](http://getbackplane.io/cli/windows/bp.zip) |
| <img height="15" src="bin/assets/tux.svg" /> Linux | [x64](http://getbackplane.io/cli/linux/bp.zip) |

#### Validating download integrity with SHASUM (Mac OSX & Linux)

```js
shasum -a 256 -c bp.sha256
bp: OK
```

#### Installation Instructions

<details>
    <summary>Mac OS</summary>

- **Download** [bp.zip](/cli/mac/bp.zip)

  <div class="rounded-lg bg-slate-100 p-3 ml-10 text-sm">
    <img src="bin/assets/warning.svg" height="15"  />
    If the Web Browser alerts that the bp.zip file is suspicious, allow the file
  </div>

- Extract **bp.zip** by double-clicking on the file

<div class="rounded-lg bg-slate-100 p-3 ml-10 text-sm">
  Before you can
  run 'bp' for the first time, 'Right-click' on the extracted 'bp' file and
  select Open from the context menu and Accept any security warning that
  appears.
</div>

- Open **Terminal** and from the directory **bp** has been extracted to, run the following command to move the file to your executable path:

  ```bash
  sudo mv bp /usr/local/bin/
  ```

- To verify that **bp** is successfully installed, run:
  ```bash
  bp --version
  1.0.0
  ```

</details>

<details>
    <summary>Windows</summary>
    
- **Download** [bp.zip](/cli/windows/bp.zip)
- **Extract** contents to folder
    ```ps
    expand-archive bp.zip c:\backplane
    ```

- Add **bp.exe** file system environment path

  ```ps
  $newPath = "C:\backplane"
  $currentPath = [System.Environment]::GetEnvironmentVariable("Path", "Machine")
  [System.Environment]::SetEnvironmentVariable("Path", "$currentPath;$newPath", "Machine")
  ```

- **Verify** installation - To check if **bp.exe** is successfully installed, run:

  ```ps
  bp --version
  1.0.0
  ```

</details>

<details>
    <summary>Linux</summary>

- **Download** [bp.zip](/cli/linux/bp.zip)
- **Extract** executable from ZIP file.

  ```bash
  sudo apt install unzip
  unzip bp.zip
  ```

- Move the file to your executable path

  ```bash
  sudo mv ./bp /usr/local/bin/bp
  ```

- **Verify** installation to check that **bp** is successfully installed, run:

  ```bash
  bp --version
  1.0.0
  ```

</details>

### NPM

- Install [Node.JS](https://nodejs.org/en/download) on your system and then from a terminal window, initialise an NPM project.

  ```bash
  mkdir backplane-cli
  cd backplane-api
  npm init -y
  npm i @backplane-software/backplane-cli -g
  ```

- Once the CLI has been installed, within the directory containing the `package.json`, run the `npm link` command to make the file executable.

  ```bash
  npm link
  ```

  Use the below command to verify installation has been successful:

  ```bash
  $ bp -V
  v0.11.0
  ```

## Creating Binaries with pkg

Install `pkg` globally, then use the pkg command as follows:

```js
npm install -g pkg
```

#### Create Mac OSX executable

```js
pkg . --targets node16-macos-arm64 --output dist/mac/bp
```

#### Create Windows executable

```js
pkg . --targets node16-win-arm64 --output dist/win/bp.exe
```

#### Create Linux executable

```js
pkg . --targets node16-linux-arm64 --output dist/linux/bp
```

## Support

Backplane is an Open Source Cloud Abstraction API and CLI and support is provided on a best endeavour basis.

Use the Slack Support Channel [here](https://backplane-dev.slack.com/archives/C07CSJYU2QH)
