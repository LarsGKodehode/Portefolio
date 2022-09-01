import {
  DataBio,
  HomeProps,
} from "../../@types/types";

/**
 * Personal information and profile picture link
 */
const bio: DataBio = {
  name: 'Lars Gunnar',
  pictureURL: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
  bioShort: 'Likes understanding how things works',
}

/**
 * Content for homepage
 */
const DataHome: HomeProps = {
  bio: bio,
};

export default DataHome;