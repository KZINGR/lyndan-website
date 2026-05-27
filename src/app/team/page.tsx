import React from 'react';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Lynnie Kritzinger',
    role: 'BC Consultant | Co-Founder',
    bio: 'Lynnie brings over 5 years of experience in enterprise management systems, leading Lyndan to the forefront of the industry.',
    image: '/sarah_ceo.png'
  },
  {
    name: 'Dieter Kritzinger',
    role: 'CEO | Co-Founder',
    bio: 'With a passion for scalable architecture, Dieter oversees the development of our core Sentry and BCMS platforms.',
    image: '/david_cto.png'
  }

];

export default function TeamPage() {
  return (
    <main>
      <section className="section" style={{ paddingTop: '8rem', minHeight: 'calc(100vh - 80px)' }}>
        <div className="container">
          <div className="text-center">
            <h1 className="title" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Meet the Team</h1>
            <p className="subtitle" style={{ marginBottom: '4rem' }}>
              The dedicated professionals behind Lyndan's cutting-edge management systems.
            </p>
          </div>

          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-image-container">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role text-gradient">{member.role}</p>
                  <p className="team-bio">{member.bio}</p>

                  <div className="team-social">
                    <a href="#" className="social-link" aria-label="LinkedIn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                    <a href="#" className="social-link" aria-label="Twitter">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
