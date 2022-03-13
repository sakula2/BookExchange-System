const Profile = require('../../models/Profile');

module.exports ={
    Query: {
        async getProfiles() {
            try {
              const profiles = await Profile.find();
              return profiles;
            } catch (err) {
              console.log(err.message)
            }
 },
   async getProfile(_,{ user_id }) {
       try{
           const profiles = await Profile.findById(user_id);
           if(profiles){
               return profiles;
           }else{
               throw new Error('profile not found')
           }
       }catch(err){
           throw new Error(err)
       }
   }
},
Mutation :{
createProfile: async (root,args,context,info) => {

    const newProfile = new Profile({
        genre:args.genre,
        education:args.education,
        profession:args.profession,
        phone:args.phone,
        city:args.city,
        profileCreatedAt:new Date().toISOString()
    });
    const profiles = await newProfile.save();
    return profiles;
},
async deactivateProfile(_, { user_id }) {
      const profiles = await Profile.findById(user_id);
        await profiles.delete();
        return 'Profile deleted successfully';
}
}
};