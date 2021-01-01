<div align=center>

# Foundry Project Creator Types

![Node.js Package](https://github.com/elexisvenator/foundry-pc-types/workflows/Node.js%20Package/badge.svg)

</div>

## Heads up!

This is a clone of [foundry-pc-types](https://gitlab.com/foundry-projects/foundry-pc/foundry-pc-types) by [![Twitter Follow](https://img.shields.io/badge/follow-%40NickEastNL-blue.svg?style=flat-square&logo=twitter)](https://twitter.com/NickEastNL). This project contains changes I made fix issues using these types in my own Foundry systems development.  These changes _might_ make it into the other repo, or they might not. This repo might become out of sync. There are also other initiatives to solve adding types to foundry (see the other repo's readme) which might make this obsolete. So use this at your own risk.

If you would like to contribute, consider contributing to [NickEastNL's repo](https://gitlab.com/foundry-projects/foundry-pc/foundry-pc-types) first/as well.

Currently this project is being maintained against **Foundry VTT 0.7.9**

## Installing

[Follow these steps](https://docs.github.com/en/free-pro-team@latest/packages/guides/configuring-npm-for-use-with-github-packages#authenticating-to-github-packages) to support downloading from GitHub Packages.

Add the following to your `.npmrc` file:

```npmrc
@elexisvenator:registry=https://npm.pkg.github.com
```

Once you have that, install the latest version with 

```bash
npm i @elexisvenator/foundry-pc-types
```

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
