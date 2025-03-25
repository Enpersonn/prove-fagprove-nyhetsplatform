import type { CollectionConfig } from 'payload'

export const Admin: CollectionConfig = {
  slug: 'admin',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [],
}
