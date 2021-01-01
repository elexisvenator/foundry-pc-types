<div align=center>

# Foundry Project Creator Types

</div>

## Heads up!

This is a clone of [foundry-pc-types](https://gitlab.com/foundry-projects/foundry-pc/foundry-pc-types) by [![Twitter Follow](https://img.shields.io/badge/follow-%40NickEastNL-blue.svg?style=flat-square&logo=twitter)](https://twitter.com/NickEastNL). This project contains changes I made fix issues using these types in my own Foundry systems development.  These changes _might_ make it into the other repo, or they might not. This repo might become out of sync. There are also other initiatives to solve adding types to foundry (see the other repo's readme) which might make this obsolete. So use this at your own risk.

If you would like to contribute, consider contributing to [NickEast's repo](https://gitlab.com/foundry-projects/foundry-pc/foundry-pc-types) first/as well.

## Installing

~~Due to how the Node Package Manager (NPM) works, it is not possible to simply update a package installed from Git using `npm install`. Simply reinstall the package with the command below to retrieve the latest version.~~

**TODO: This will change shortly.**

## Configuration

When not using my Project Creator, you need to manually configure your project to use the types.

TypeScript is configured with a `tsconfig.json` file in your project root. Add the following property to enable TS to use the Foundry API typings.

```json
{
	"compilerOptions": {
		"types": "foundry-pc-types"
	}
}
```

For vanilla JavaScript, you may need to use `jsconfig.json` with the above configuration, or allow TypeScript to also parse JavaScript files. Please refer to the documentation of your IDE and/or TypeScript to learn how to properly configure your environment.
