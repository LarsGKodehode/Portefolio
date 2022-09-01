// === TABLE OF CONTENT ===
// #01 - Page Props
// #02 - Import Types
// #03 - Minor Components Props
// #04 - Misc Types


// ===== #01 - Page Props =====

/**
 * 404 page props
 */
export interface Missing404Props {}

/**
 * Homepage props
 */
export interface HomeProps {
  bio: DataBio,
}

/**
 * Project page props
 */
 export interface ProjectsProps {}

 /**
  * Contact page props
  */
export interface ContactProps {}


// ===== #02 - Import Types =====

/**
 * Project data props
 */
export interface ProjectData {
  title: string,
  shortDescription: string,
  longDescription?: string,
  links?: [
    {[site: string]: URL},
  ],
  snapshot: URL,
}

/**
 * Bio. 1-2-3-whammy data
 */
export interface DataBio {
  name: string,
  bioShort: string,
  bioLong?: string,
  pictureURL: string,
}


// ===== #03 - Minor Components Props =====

/**
 * Bio card props
 */
export interface BioCardProps {
  name: string,
  bioShort: string,
  bioLong?: string,
  pictureURL: string,
}

// ===== #04 - Misc Types =====

export type ColorHEX = string