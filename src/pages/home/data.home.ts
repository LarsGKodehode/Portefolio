import {
  DataBio,
  HomeProps,
} from "../../@types/types";

/**
 * Personal information and profile picture link
 */
const bio: DataBio = {
  name: 'Lars Gunnar',
  pictureURL: 'https://unsplash.com/s/photos/instagram-profile',
  bioShort: 'Likes understanding how things works',
}

/**
 * Content for homepage
 */
const DataHome: HomeProps = {
  bio: bio,
};

export default DataHome;