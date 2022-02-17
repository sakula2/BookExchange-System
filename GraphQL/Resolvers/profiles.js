const profile = require('../../models/profile');
module.exports ={
    Query: {
        async getProfiles() {
            try {
              const profiles = await Profile.find().sort({first_name});
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
async createProfile(_, {content}){
    if (content.trim() === '') {
        throw new Error('Profile body must not be empty');
      }
    const newProfile = new Profile({
        first_name,
        last_name,
        email,
        phone,
        city,
        country,
        exchange_points,
        created_at: new Date().toISOString(),
        
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