/**
 * ClientsMarquee — CSS-animated infinite logo strip.
 * Pure server component (no interactivity needed).
 *
 * The inner list is duplicated so the seamless loop works:
 * the animation moves by -50% which lands exactly on the start
 * of the second copy, then resets invisibly.
 */

interface Logo {
  src: string;
  alt: string;
}

const LOGOS: Logo[] = [
  { src: '/uploads/MTN.jpeg',                    alt: 'MTN'             },
  { src: '/uploads/opay.jpeg',                   alt: 'OPay'            },
  { src: '/uploads/Access.jpeg',                 alt: 'Access Bank'     },
  { src: '/uploads/Microsoft.jpeg',              alt: 'Microsoft'       },
  { src: '/uploads/Dell.jpeg',                   alt: 'Dell'            },
  { src: '/uploads/hp.jpeg',                     alt: 'HP'              },
  { src: '/uploads/Providus.jpeg',               alt: 'ProvidusBank'    },
  { src: '/uploads/Sahara.jpeg',                 alt: 'Sahara Group'    },
  { src: '/uploads/Mavin Records.jpeg',          alt: 'Mavin Records'   },
  { src: '/uploads/TD Africa.jpeg',              alt: 'TD Africa'       },
  { src: '/uploads/Guten Capital.jpeg',          alt: 'Guten Capital'   },
  { src: '/uploads/leatherback.jpeg',            alt: 'Leatherback'     },
  { src: '/uploads/Sunbeth Global Concepts.jpeg',alt: 'Sunbeth Global'  },
  { src: '/uploads/Mosun Homes.jpeg',            alt: 'Mosun Homes'     },
  { src: '/uploads/realest.jpeg',                alt: 'Realest Nigeria'  },
  { src: '/uploads/prism.jpeg',                  alt: 'Prism Edge'      },
  { src: '/uploads/Gidibabs.jpeg',               alt: 'GIDIBABS'        },
  { src: '/uploads/ENL-NOVA Wordmark_Logo_White.jpg', alt: 'ENL-NOVA'  },
];

export default function ClientsMarquee() {
  // Duplicate for seamless loop
  const all = [...LOGOS, ...LOGOS];

  return (
    <section className="clients" id="clients" aria-label="Trusted clients">
      <p className="clients-label">Trusted by leading organizations</p>
      <div className="logos-wrap">
        <div className="logos-inner" aria-hidden="true">
          {all.map((logo, i) => (
            <div className="logo-item" key={`${logo.alt}-${i}`}>
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
