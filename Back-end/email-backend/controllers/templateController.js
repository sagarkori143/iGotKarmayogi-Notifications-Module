import EmailTemplate from '../models/template.js';

// Fetch all templates from the database
/**
 * Retrieves all email templates from the database.
 * @returns {Promise<Array>} A promise that resolves to an array of email templates.
*/
export const getTemplates = async () => {
  try {
    const templates = await EmailTemplate.find();
    return templates;
  } catch (error) {
    console.error('Error fetching templates:', error);
    return [];
  }
};

// Select a template by ID
/**
 * Retrieves a template by its ID.
 * @param {string} id - The ID of the template to retrieve.
 * @returns {Promise<Object|null>} - A promise that resolves to the template object if found, or null if not found.
*/
export const getTemplateById = async (id) => {
  try {
    const template = await EmailTemplate.findById(id);
    return template;
  } catch (error) {
    console.error('Error fetching template by ID:', error);
    return null;
  }
};

// Create a new template
/**
 * Creates a new email template.
 * @param {string} name - The name of the template.
 * @param {string} subject - The subject of the email template.
 * @param {string} body - The body content of the email template.
 * @returns {Promise<Object|null>} - A promise that resolves to the newly created template object, or null if an error occurs.
*/
export const createTemplate = async (name, subject, body) => {
  const newTemplate = new EmailTemplate({
    name,
    subject,
    body,
  });

  try {
    await newTemplate.save();
    return newTemplate;
  } catch (error) {
    console.error('Error creating template:', error);
    return null;
  }
};
