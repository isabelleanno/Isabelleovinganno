<?php

namespace App\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

class HtmlExtension extends AbstractExtension
{
    public function getFilters(): array
    {
        return [
            new TwigFilter('add_classes', [$this, 'addClasses']),
        ];
    }

    public function addClasses(string $html, string $classes): string
    {
        if (empty($html) || empty($classes)) {
            return $html;
        }

        // Add classes to common HTML elements
        $patterns = [
            '/<(p|h[1-6]|span|div|a|strong|em|ul|ol|li)(\s[^>]*)?>/i',
        ];

        foreach ($patterns as $pattern) {
            $html = preg_replace_callback($pattern, function ($matches) use ($classes) {
                $tag = $matches[1];
                $attributes = $matches[2] ?? '';

                // Check if class attribute already exists
                if (preg_match('/class=["\']([^"\']*)["\']/', $attributes, $classMatches)) {
                    $existingClasses = $classMatches[1];
                    $attributes = preg_replace('/class=["\'][^"\']*["\']/', 'class="' . $existingClasses . ' ' . $classes . '"', $attributes);
                } else {
                    $attributes .= ' class="' . $classes . '"';
                }

                return '<' . $tag . $attributes . '>';
            }, $html);
        }

        return $html;
    }
}
