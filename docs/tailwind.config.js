module.exports = {
  purge: {
    options: {
      // the regex is broken: even their own examples don't work. Wait for upgrade.
      whitelist: [
        'bg-green-100',
        'dark:bg-green-900',
        'text-green-500',
        'bg-purple-100',
        'dark:bg-purple-900',
        'text-purple-500',
        'bg-blue-100',
        'dark:bg-blue-900',
        'text-blue-500'
      ]
    }
  }
}
