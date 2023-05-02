type ArgsType = {
  cep: string
}

export const queries = {
  searchCep: (args: ArgsType, ctx: Context) => {
    const {
      clients: { viaCep },
    } = ctx

    const { cep } = args

    return viaCep.searchCep(cep)
  },
}
