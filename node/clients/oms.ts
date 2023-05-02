import type { IOContext, InstanceOptions } from '@vtex/api'
import { JanusClient } from '@vtex/api'

export default class Oms extends JanusClient {
  constructor(context: IOContext, options: InstanceOptions) {
    super(context, {
      ...options,
      headers: {
        VtexIdclientAuthCookie: context.authToken,
      },
    })
  }
}
