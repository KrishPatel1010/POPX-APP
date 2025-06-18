import React, { useContext } from "react";
import { UserContext } from "../userContext.jsx";

const avatarUrl = "https://randomuser.me/api/portraits/women/68.jpg"; // Placeholder avatar

function Profile() {
    const { name, email } = useContext(UserContext);
    return (
        <div style={{ minHeight: '100vh', background: '#fff', width: '100vw' }}>
            <div style={{ maxWidth: 480, margin: '0 auto', paddingTop: 24 }}>
                <h2 style={{ textAlign: 'center', fontWeight: 500, fontSize: 22, marginBottom: 24 }}>Account Settings</h2>
                <div style={{ background: '#f7f8fa', borderRadius: 6, border: '1px solid #f2f2f2', padding: 24, margin: '0 auto', maxWidth: 400, minHeight: 220, boxSizing: 'border-box', borderBottom: '2px dashed #e0e0e0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
                        <div style={{ position: 'relative', marginRight: 18 }}>
                            <img src={avatarUrl} alt="avatar" style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover' }} />
                            <span style={{ position: 'absolute', bottom: 0, left: 44, background: '#8f5aff', borderRadius: '50%', padding: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {/* Camera SVG icon */}
                                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                                    <circle cx="10" cy="10" r="10" fill="#8f5aff" />
                                    <path d="M13.5 9.5V13C13.5 13.2761 13.2761 13.5 13 13.5H7C6.72386 13.5 6.5 13.2761 6.5 13V9.5M8.5 8.5C8.5 7.94772 8.94772 7.5 9.5 7.5H10.5C11.0523 7.5 11.5 7.94772 11.5 8.5V9.5H8.5V8.5Z" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </div>
                        <div>
                            <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 2 }}>{name}</div>
                            <div style={{ color: '#222', fontSize: 15 }}>{email}</div>
                        </div>
                    </div>
                    <div style={{ color: '#222', fontSize: 15, marginTop: 8 }}>
                        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile; 