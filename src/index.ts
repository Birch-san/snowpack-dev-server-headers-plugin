import type { PluginDevServerHooks, SnowpackConfig, SnowpackPluginFactory } from 'snowpack'

export interface DevServerHooksPluginOptions {
  devServer: PluginDevServerHooks
}

const plugin: SnowpackPluginFactory<DevServerHooksPluginOptions> = (
  _snowpackConfig: SnowpackConfig,
  pluginOptions?: DevServerHooksPluginOptions
  ) => ({
  name: "dev-server-hooks",
  devServer: pluginOptions?.devServer
})

export default plugin;