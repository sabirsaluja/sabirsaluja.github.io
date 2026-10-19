import { getCollection } from 'astro:content';

/** Publications, newest first. Submitted manuscripts sort as their submission date. */
export async function getPublications() {
  const pubs = await getCollection('publications');
  return pubs.sort(
    (a, b) => b.data.year - a.data.year || (b.data.month ?? 0) - (a.data.month ?? 0),
  );
}

/** Presentations, newest first. */
export async function getPresentations() {
  const items = await getCollection('presentations');
  return items.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
