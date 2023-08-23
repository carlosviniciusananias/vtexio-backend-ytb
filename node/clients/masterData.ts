import type { IOContext, InstanceOptions } from '@vtex/api'
import { MasterData } from '@vtex/api'

export default class Md extends MasterData {
  constructor(context: IOContext, options: InstanceOptions) {
    super(context, {
      ...options,
      headers: {
        VtexIdclientAutCookie: context.authToken,
      },
    })
  }

  public search = (name: string, fields: string[]) => {
    return this.searchDocuments({
      dataEntity: name,
      fields,
      pagination: { page: 1, pageSize: 25 },
    })
  }

  public create = (name: string, fields: string[]) => {
    return this.createDocument({
      dataEntity: name,
      fields,
    })
  }
}
