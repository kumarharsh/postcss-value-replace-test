function generateChunkManifest(stats) {
  return stats.chunks.reduce((manifest, chunk) => {
    manifest[chunk.id] = chunk.entry ? undefined : chunk.files[0];
    return manifest;
  }, {});
}

module.exports = function loadTemplate(templateParams) {
  return require('!!jade?pretty!./index.jade')({
    assets: templateParams.htmlWebpackPlugin.files,
    chunkManifest: generateChunkManifest(templateParams.webpack),
  });
};
