import parser from 'co-body'

export async function viaCepMiddleware(
  ctx: Context,
  next: () => Promise<unknown>
) {
  const {
    clients: { viaCep },
  } = ctx

  const { cep } = await parser(ctx.req)

  const response = await viaCep.searchCep(cep)

  ctx.status = 200
  ctx.body = {
    response,
  }

  await next()
}
