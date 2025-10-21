import * as React from 'react';
import { css } from 'ds/css';
import { stack, grid } from 'ds/patterns';
import { useTranslations } from 'next-intl';

export default function AmenitiesPage() {
  const t = useTranslations('amenities');

  const amenities = [
    'Barbecue utensils',
    'BBQ grill',
    'Beach access',
    'Bed linens',
    'Bidet',
    'Blender',
    'Books and reading material',
    'Clothing storage',
    'Cooking basics',
    'Crib',
    'Dedicated workspace',
    'Dining table',
    'Dishes and silverware',
    'Drying rack for clothing',
    'Ethernet connection',
    'Exercise equipment',
    'Extra pillows and blankets',
    'Fire pit',
    'Free parking on premises',
    'Freezer',
    'Gym',
    'Hair dryer',
    'Hangers',
    'Heating',
    'High chair',
    'Hot water',
    'Hot water kettle',
    'Indoor fireplace',
    'Iron',
    'Kitchen',
    'Kitchenette',
    'Laundromat nearby',
    'Mosquito net',
    'Outdoor dining area',
    'Outdoor furniture',
    'Outdoor kitchen',
    'Outdoor playground',
    'Oven',
    'Refrigerator',
    'Room-darkening shades',
    'Shower gel',
    'TV',
    'Washer',
    'Wifi',
    'Wine glasses'
  ];

  return (
    <div className={stack({ gap: 'xl' })}>
      <h1 className={css({ textStyle: 'base', lineHeight: 'tight' })}>
        {t('title')}
      </h1>
      <ul
        className={grid({
          gap: 's',
          columns: { base: 1, bp1: 2 },
        })}
      >
        {amenities.map((amenity, index) => (
          <li
            key={index}
            className={css({
              textStyle: 'base',
              fontSize: '1',
              listStyle: 'none',
              paddingLeft: '0'
            })}
          >
            • {amenity}
          </li>
        ))}
      </ul>
    </div>
  );
}
