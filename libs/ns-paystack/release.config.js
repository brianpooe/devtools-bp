const appName = 'ns-paystack';
const appPath = `libs/${appName}`;
const artifactName = appName;

module.exports = {
    extends: 'release.config.base.js',
    debug: 'true',
    name: appName,
    tagFormat: artifactName + '-v${version}',
    commitPaths: ['force-release.md', `${appPath}/*`],
    branches: ['main', 'release'],
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        [
            '@semantic-release/changelog',
            {
                changelogFile: `${appPath}/CHANGELOG.md`
            }
        ],
        '@semantic-release/npm',
        {
            pkgRoot: `dist/${appPath}`
        },
        [
            '@semantic-release/git',
            {
                assets: [`${appPath}/README.md`, `${appPath}/CHANGELOG.md`],
                message:
                    `chore(release): ${artifactName}` +
                    '-v${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
            }
        ]
    ]
};
