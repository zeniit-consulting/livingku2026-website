import React, { createContext, useContext, useState, useEffect } from 'react';
import { content as defaultContent } from '../data/content';

const ContentContext = createContext();

const STORAGE_KEY = 'livingku_cms_content_v1';
const AUTH_KEY = 'livingku_cms_auth_v1';

export function ContentProvider({ children }) {
  // Load content from localStorage or fallback to default
  const [content, setContent] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.id && parsed.en) {
          return parsed;
        }
      }
    } catch (e) {
      console.error('Failed to load content from localStorage:', e);
    }
    return defaultContent;
  });

  // Admin authentication state
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(() => {
    try {
      return localStorage.getItem(AUTH_KEY) === 'true';
    } catch {
      return false;
    }
  });

  // Save content changes to localStorage
  const saveContent = (newContent) => {
    setContent(newContent);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newContent));
      return { success: true };
    } catch (e) {
      console.error('Failed to save to localStorage:', e);
      return { success: false, error: e.message };
    }
  };

  // Reset to original default content
  const resetToDefault = () => {
    setContent(defaultContent);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.error(e);
    }
  };

  // Admin Login helper (Default simple pass: "livingku2026" or "admin123")
  const loginAdmin = (password) => {
    if (password === 'admin123' || password === 'livingku2026' || password === 'admin') {
      setIsAdminAuthenticated(true);
      localStorage.setItem(AUTH_KEY, 'true');
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdminAuthenticated(false);
    localStorage.removeItem(AUTH_KEY);
  };

  // Quick helper to update specific section
  const updateSection = (lang, sectionKey, updatedData) => {
    const updated = {
      ...content,
      [lang]: {
        ...content[lang],
        [sectionKey]: updatedData
      }
    };
    return saveContent(updated);
  };

  // Blog CRUD helpers
  const addBlogPost = (postData) => {
    const newId = postData.id || `post-${Date.now()}`;
    const newPost = { ...postData, id: newId };

    const updated = {
      ...content,
      id: {
        ...content.id,
        blog: {
          ...content.id.blog,
          posts: [newPost, ...(content.id.blog?.posts || [])]
        }
      },
      en: {
        ...content.en,
        blog: {
          ...content.en.blog,
          posts: [newPost, ...(content.en.blog?.posts || [])]
        }
      }
    };
    return saveContent(updated);
  };

  const updateBlogPost = (postId, updatedPost) => {
    const updateList = (posts = []) => posts.map(p => p.id === postId ? { ...p, ...updatedPost } : p);

    const updated = {
      ...content,
      id: {
        ...content.id,
        blog: {
          ...content.id.blog,
          posts: updateList(content.id.blog?.posts)
        }
      },
      en: {
        ...content.en,
        blog: {
          ...content.en.blog,
          posts: updateList(content.en.blog?.posts)
        }
      }
    };
    return saveContent(updated);
  };

  const deleteBlogPost = (postId) => {
    const filterList = (posts = []) => posts.filter(p => p.id !== postId);

    const updated = {
      ...content,
      id: {
        ...content.id,
        blog: {
          ...content.id.blog,
          posts: filterList(content.id.blog?.posts)
        }
      },
      en: {
        ...content.en,
        blog: {
          ...content.en.blog,
          posts: filterList(content.en.blog?.posts)
        }
      }
    };
    return saveContent(updated);
  };

  return (
    <ContentContext.Provider value={{
      content,
      saveContent,
      resetToDefault,
      updateSection,
      isAdminAuthenticated,
      loginAdmin,
      logoutAdmin,
      addBlogPost,
      updateBlogPost,
      deleteBlogPost
    }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
}
