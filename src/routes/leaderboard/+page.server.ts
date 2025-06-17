import supabase from '$lib/supabase';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    const { data: leaderboard, error } = await supabase.from('featurefriday_leaderboard').select('id, team_name, score, team_members').order('score', { ascending: false });
    if (error) {
        console.log(error);
    }
    return {
        leaderboard
    };
};