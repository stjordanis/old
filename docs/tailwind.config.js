module.exports = {
  purge: {
    options: {
      safelist: {
        standard: [/bg-\w+-100/, /dark\:bg-\w+-900/, /text-\w+-500/]
      }
    }
  }
}
