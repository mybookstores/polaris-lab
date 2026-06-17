import groq from "groq";
import { sanityClient } from "./client";

function getSanityClient() {
  if (!sanityClient) {
    throw new Error("Sanity client is not configured. Please set NEXT_PUBLIC_SANITY_PROJECT_ID before querying CMS content.");
  }

  return sanityClient;
}

export const directionListQuery = groq`*[_type == "researchDirection" && status == "published"] | order(order asc) {
  _id,
  id,
  "slug": slug.current,
  icon,
  color,
  title,
  description,
  subdirections,
  order,
  status
}`;

export const paperListQuery = groq`*[_type == "paper" && status == "published"] | order(year desc) {
  _id,
  legacyId,
  title,
  authors,
  year,
  venue,
  abstract,
  citations,
  link,
  status,
  "direction": direction->id
}`;

export const teamMemberListQuery = groq`*[_type == "teamMember" && status == "published"] | order(name asc) {
  _id,
  legacyId,
  name,
  role,
  title,
  research,
  bio,
  email,
  avatar,
  status,
  "directions": directions[]->id
}`;

export async function fetchCmsDirections() {
  return getSanityClient().fetch(directionListQuery);
}

export async function fetchCmsPapers() {
  return getSanityClient().fetch(paperListQuery);
}

export async function fetchCmsTeamMembers() {
  return getSanityClient().fetch(teamMemberListQuery);
}
