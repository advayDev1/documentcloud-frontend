import session from "./session";
import { apiUrl } from "./base";
import { Entities } from '@/structure/entity';

import { page1, page2 } from './mockEntity';

export async function getEntities(id, page = 1) {
  // Returns annotations for the specified document
  const { data } = await session.get(
    apiUrl(queryBuilder(`documents/${id}/entities/`, { page }))
  );
  return new Entities(data);
}
