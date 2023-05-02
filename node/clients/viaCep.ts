import type { IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

export default class ViaCep extends ExternalClient {
  constructor(context: IOContext) {
    super('https://viacep.com.br/', context)
  }

  public searchCep = (cep: string): Promise<unknown> => {
    return this.http.get(`/ws/${cep}/json/`)
  }
}
