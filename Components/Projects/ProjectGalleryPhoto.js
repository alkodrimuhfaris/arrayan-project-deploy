import React from 'react';
import imageStorage from '../../helpers/imageStorage';

export default function ProjectGalleryPhoto({src = '', text = ''}) {
  return (
    <div className="pg-photo rounded position-relative overflow-hidden bg-secondary">
      <img src={imageStorage(src)} alt={`project-${src}`} />
      <p className="pg-photo-capt">{text}</p>
    </div>
  );
}
