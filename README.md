# @gnome/env

<div height=30" vertical-align="top">
<image src="https://raw.githubusercontent.com/gnomejs/gnomejs/main/assets/icon.png"
    alt="logo" width="60" valign="middle" />
<span>Work less. Do more. </span>
</div>

## Overview

The `pwsh` module provides a simple way to execute
PowerShell Core scripts or files.

The module relies upon the @gnome/exec module and
has the same basic usage as the `Command` and `ShellCommand` class.

## Basic Usage

```typescript
import { pwsh } from "@gnome/pwsh";

const cmd = await pwsh("Write-Host 'Hello, World!'", { 
        stdout: 'piped', 
        stderr: 'piped'
    });
console.log(await cmd.text());
console.log(cmd.code);

console.log(await pwsh("Write-Host 'Hello, World!'").text());

console.log(await pwsh("test.ps1").text()); 

// runs powershell command and writes directly to console
await pwsh("Write-Host 'I am alive'").run();
```

[MIT License](./LICENSE.md)
