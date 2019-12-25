import alt from 'alt';
import native from 'natives';
import mpairraces from './data/mpairraces_overlays.js';
import mpbeach from './data/mpbeach_overlays.js';
import mpbiker from './data/mpbiker_overlays.js';
import mpbusiness from './data/mpbusiness_overlays.js';
import mpchristmas2 from './data/mpchristmas2_overlays.js';
import mpchristmas2017 from './data/mpchristmas2017_overlays.js';
import mpchristmas2018 from './data/mpchristmas2018_overlays.js';
import mpgunrunning from './data/mpgunrunning_overlays.js';
import mphipster from './data/mphipster_overlays.js';
import mpimportexport from './data/mpimportexport_overlays.js';
import mplowrider from './data/mplowrider_overlays.js';
import mplowrider2 from './data/mplowrider2_overlays.js';
import mpluxe from './data/mpluxe_overlays.js';
import mpluxe2 from './data/mpluxe2_overlays.js';
import mpsmuggler from './data/mpsmuggler_overlays.js';
import mpstunt from './data/mpstunt_overlays.js';
import mpvinewood from './data/mpvinewood_overlays.js';
import multiplayer from './data/multiplayer_overlays.js';
import mpheist3 from './data/mpheist3_overlays.js';

const allTattoos = {
    // "mpairraces_overlays": mpairraces,
    // "mpbeach_overlays": mpbeach,
    // "mpbiker_overlays": mpbiker,
    // "mpbusiness_overlays": mpbusiness,
    // "mpchristmas2_overlays": mpchristmas2,
    // "mpchristmas2017_overlays": mpchristmas2017,
    // "mpchristmas2018_overlays": mpchristmas2018,
    // "mpgunrunning_overlays": mpgunrunning,
    // "mphipster_overlays": mphipster,
    // "mpimportexport_overlays": mpimportexport,
    // "mplowrider_overlays": mplowrider,
    // "mplowrider2_overlays": mplowrider2,
    // "mpluxe_overlays": mpluxe,
    // "mpluxe2_overlays": mpluxe2,
    // "mpsmuggler_overlays": mpsmuggler,
    // "mpstunt_overlays": mpstunt,
    // "mpvinewood_overlays": mpvinewood,
    // "multiplayer_overlays": multiplayer,
    "mpheist3": mpheist3
}

const newTattooList = [];

function generateTattoos(tattoos, tattooCollection) {
    let i = 0;
    for (i; i < tattoos.length; i++) {
        const tattoo = tattoos[i];
        newTattooList.push({
            tattoo_collection: tattooCollection,
            hashNameMale: tattoo.HashNameMale,
            hashNameFemale: tattoo.HashNameFemale,
            name: native.getLabelText(tattoo.Name),
            zone: tattoo.ZoneID,
            price: tattoo.Price,
        });
    }

    alt.log(`Added ${i} tattoos from collection ${tattooCollection}`);
}

alt.on('consoleCommand', (command , ...args) => {
    if(command === 'generateTattoos'){
        for (const tattooCollection in allTattoos) {
            if (allTattoos.hasOwnProperty(tattooCollection)) {
                const tattoos = allTattoos[tattooCollection];
                generateTattoos(tattoos, tattooCollection);
            }
        }

        alt.log(JSON.stringify(newTattooList, null, 4));
        alt.log(`Created ${newTattooList.length} tattoos`);
    }
});