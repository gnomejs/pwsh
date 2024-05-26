import { assertEquals as equals } from "jsr:@std/assert@^0.224.0";
import { remove, writeTextFile } from "jsr:@gnome/fs@^0.0.0/deno";
import { pwsh } from "./pwsh.ts";

Deno.test("simple inline test", async () => {
    const cmd = await pwsh("Write-Host 'Hello, World!'");
    equals(cmd.text(), "Hello, World!\n");
    equals(0, cmd.code);
});

Deno.test("multi-line inline test", async () => {
    const cmd = await pwsh(`
        $a = 1
        $b = 2
        $a + $b
    `);
    equals(cmd.text(), "3\n");
    equals(0, cmd.code);
});

Deno.test("simple file test", async () => {
    await writeTextFile("test.ps1", "Write-Host 'Hello, World!'");
    try {
        // purposely add space after test.ps1
        const cmd = await pwsh("test.ps1 ");
        equals(0, cmd.code);
        equals(cmd.text(), "Hello, World!\n");
    } finally {
        await remove("test.ps1");
    }
});
